export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res, 'Guardrail was processed');
  } catch (error) {
    queue.push(error, 'Guardrail was processed');
  }
  return queue;
}
