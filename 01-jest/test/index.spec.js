import { add, subtract } from '../index'

describe('真测试', () => {
  test('add(1, 2) = 3', () => {
		const a = 1
		const b = 2
    expect(add(a, b)).toBe(3)
  })
})

describe('假测试', () => {
	test("不写 expect ", () => {
		subtract()
	})
})

describe('异步测试', () => {
	test('异步add', () => {
		const a = 3
		const b = 7
		setTimeout(() => {
			expect(add(a, b)).toBe(10)
		}, 1000)
	})
})
