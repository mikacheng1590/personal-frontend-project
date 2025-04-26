import { SupabaseClient, PostgrestError } from '@supabase/supabase-js'
import { handleResponse, Response } from '@/app/_common/supabase/response'
import { TABLE_PORTFOLIO_MODAL, PORTFOLIO_MODAL_STATUS_ACTIVE, RPC_ADD_VIEW_COUNT } from '@/app/_common/constants/supabase'
import { PortfolioModal } from '@/app/_common/supabase/types'

export class BaseDatabaseService<T extends SupabaseClient | Promise<SupabaseClient>> {
  protected supabaseClientFunc: () => T;

  constructor(
    supabaseClientFunc: () => T,
  ) {
    this.supabaseClientFunc = supabaseClientFunc
  }

  protected async getSupabase(): Promise<T> {
    return await this.supabaseClientFunc();
  }

  async getPortfolioModalContent(
    queryString: string
  ): Promise<Response<PortfolioModal | null, PostgrestError>> {
    const supabase = await this.getSupabase();

    const { data, error } = await supabase
      .from(TABLE_PORTFOLIO_MODAL)
      .select('show_text')
      .eq('query_string', queryString)
      .eq('status', PORTFOLIO_MODAL_STATUS_ACTIVE)
      .single()

    return handleResponse({
      data,
      error
    })
  }

  async updatePortfolioViewCount(
    queryString: string
  ): Promise<Response<null, PostgrestError>> {
    const supabase = await this.getSupabase();

    const { data, error } = await supabase
      .rpc(RPC_ADD_VIEW_COUNT, {
        curr_query_string: queryString
      })

    return handleResponse({
      data,
      error
    })
  }
} 