export const pannaOrder: Record<string, number> = {
    '1': 1,'2': 2,'3': 3,'4': 4,'5': 5,
    '6': 6,'7': 7,'8': 8,'9': 9,'0': 10
  };
  
  export function sortPanna(number: string) {
    return number
      .split('')
      .sort((a,b)=> pannaOrder[a] - pannaOrder[b])
      .join('');
  }