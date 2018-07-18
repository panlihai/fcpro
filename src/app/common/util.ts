/**
 * 比较大小
 * @param firstValue 
 * @param secondValue 
 */
export const compareValue = (firstValue: any, secondValue: any): boolean => {
    return firstValue > secondValue;
}
/**
 * 返回的boolean值为true时,提示正确的消息，反之，提示错误的消息
 * @param checkValue 
 * @param trueMsg 
 * @param falseMsg 
 */
export const messageByValue = (checkValue: boolean, trueMsg: string, falseMsg: string): string => {
    return checkValue ? trueMsg : falseMsg;
}