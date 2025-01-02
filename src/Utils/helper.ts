
export function toTitleCase(sentance: string): string{
    return sentance.split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ')
}