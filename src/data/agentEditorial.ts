import type { AgentEditorial } from "./agentEditorialTypes";
import { editorialBatch1 } from "./agentEditorialBatch1";
import { editorialBatch2 } from "./agentEditorialBatch2";
import { editorialBatch3 } from "./agentEditorialBatch3";
import { editorialBatch4 } from "./agentEditorialBatch4";

/** Editorial content deliberately differs from the original short LinkedIn posts. */
export const agentEditorial: Record<string, AgentEditorial> = {
  ...editorialBatch1,
  ...editorialBatch2,
  ...editorialBatch3,
  ...editorialBatch4,
};
