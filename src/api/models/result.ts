/**
 * IResult
 * @alias IResult
 * @typedef {object} IResult
 * @property {string} code Identifier code of an result card; Used also as image filename
 * @property {string} name Name of an result card
 * @property {string} detail Description of an result card
 * @property {number} percent Rarity of personality, out of 100
 * @property {boolean} isIdeal True if the result is about someone's ideal type
*/
export interface IResult {
  code: string;
  name: string;
  detail: string;
  percent: number;
  isIdeal: boolean;
}
