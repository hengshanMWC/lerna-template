import a from '@test/a'

export default function b(num) {
    let num1 = num
    return function (num2) {
        return num1 = a(num1, num2)
    }
}
