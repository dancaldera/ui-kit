/**
 * Greet a person.
 * @param name The name of the person to greet.
 * @returns A greeting message.
 */
export function greet(name: string, lang: string = 'en'): string {
  switch (lang) {
    case 'en':
      return `Hello, ${name}!`
    case 'es':
      return `¡Hola, ${name}!`
    case 'fr':
      return `Bonjour, ${name}!`
    default:
      return `Hello, ${name}!`
  }
}
