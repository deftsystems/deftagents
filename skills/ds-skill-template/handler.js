module.exports = async function handler(context) {
  const input = context?.input || "";
  return `DS Skill Template received: ${String(input)}`;
};
