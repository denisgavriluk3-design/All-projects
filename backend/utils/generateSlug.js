export function generateSlug(name, groupId, categoryId) {
    return `${name} ${groupId} ${categoryId}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  