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

/**
 * Create a button.
 * @returns A button element.
 */
export function createButton(): string {
  return `
    <style>
      .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }
    </style>
    <button class="button">Click me!</button>
  `
}
