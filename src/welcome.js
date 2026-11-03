export function welcome(name) {
<<<<<<< HEAD
  return `Hello, ${name || "guest"}!`;
=======
  const who = name?.trim() || "friend";
  return `Hey, ${who}! Welcome aboard.`;
>>>>>>> a2f5bd9 (feat: friendlier welcome message)
}
