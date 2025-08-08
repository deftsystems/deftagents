module.exports = async function handler(context) {
  const input = context?.input || "";
  return `Your skill received: ${String(input)}`;
};
