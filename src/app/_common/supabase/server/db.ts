import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "./client";
import { BaseDatabaseService } from "../DatabaseService";

export class ServerDbService extends BaseDatabaseService<
  Promise<SupabaseClient>
> {
  constructor() {
    super(async () => createClient());
  }
}

export const serverDbService = new ServerDbService();
