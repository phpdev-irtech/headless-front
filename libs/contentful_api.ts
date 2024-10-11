import { createClient } from "contentful";

function prepareClient() {
  return createClient({
    space: 'b782fvyawmey',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'UvDAvYoJ_I4GxmsJpUJpADWGSxmECNwQdxFbS7q0yFs'
  })
}

export function getEntry(entryId: string) {
  const query = prepareClient().getEntry(entryId);
  return query;
}