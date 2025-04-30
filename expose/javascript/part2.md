1. It will print the discounted value, 3, since I was accessible.
2. It will return a reference error since discountedPrice was re-declared on each iteration. 
3. It will print 150 since the final price holds the value from last loop iteration unlike discountedprice
4. It will print 50, 100, 150 since each discounted price is rounded and pushed to the discounted array. 
5. It will cause an error since in the for loop it's let i = 0, instead of var i = 0 since let i only exists in the block loop.; 
6. It will also cause a ref error since similar to #5 let is block-scoped and only exists within the loop therefore it's undefined. 
7. It will print 150 since finalPrice is declared with let outside of the for loop, we end up getting 150 printed at line 14
8. The function will return 50,100,150 since it returned discounted with a discount of 0.5 and finalprice is pushed to discounted arr.
9. It causes a reference error since they let i anbd the console.log used i.
10. I think it will print 3 since const is block-scoped but it was used in the correct scope.
11. It will return 50, 100, and 150 since the code was perfect with the const being used in the correct scope.
12. student.name, student["grad year"], student.greeting(), student["Favorite Teacher"].name, student.courseLoad[0]
13. a: '32' since it's a string, b: 1, since the - operator forces '3' to become 3, c: outputs 3 since null is 0, d: '3null' since it concatenates with a + operator, e: 4 since true becomes 1, f: 0 since it's 0 + 0,        g: '3undefined' since it converts both to strings, h: NaN since undefined cannot be a number.
14. a: true since 2 becomes a number, b: false since '2' comes after '1', c: true since '2' becomes a number,   d: false since === checks both value & type, e: false since true is 1, f: boolean(2) becomes true therefore both the same.
15. == is loose equality operator where it check value but not type, where as === operator checks both value and type.
17. 
