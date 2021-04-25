# 1a: 
1. 20 
2. 20
3. 20
4. The code will return an error. Since let keyword only has block scope, therefore, let result can only be used within the if-else block. 
5. The code will return an error. We have already assigned result to 0, therefore we cannot reassign it to something else.
6. The code will return an error. In fact, we won't reach this line because the program will stop when we first try to reassign result to num1 + num2. 

# 1b: 
 1. Line 12 will output 3. Since we declar i using var, i can be accessed anywhere in the function. Therefore, i will be updated with the for loop. And it will reach the length of list prices. 
2. Line 13 will output 150. Since discountedPrice is declared as var, we can access it anywhere in the function. And discountedPrice will be updated everytime when we assign it to a new value. Therefore, at the end of the loop, discountedPrice will be the discounted price for price 300 with 0.5 discount. 
3. Line 15 will output 150. Since finalPrice is declared as var, we can access it anywhere in the function. And finalPrice will be updated everytime when we assign it to a new value. Therefore, at the end of the loop, finalPrice will be discountedPrice*100/100, which gives 150. 
4. The function will return the discounted price for each price. Since discounted is declared as var, we can access it anywhere in the function. Therefore, we can return it at the end of the function. 
5. The code causes an error. Since i is declared as let, we can only access it within the for-loop block. Therefore, i will not be defined when we try to output the value of it to console. 
6. The code causes an error. Since discountedPrice is declared as let, we can only access it within the for-loop block. Therefore, discountedPrice will not be defined when we try to output the value of it to console. 
7. Line 14 will output 150 to console. Since finalPrice is defined as let, we can access it within the block scope, which is the function discountPrices. Line 14 is in the function, therefore it will output the finalPrice that is lastly assigned in the for-loop.
8. The function will return the discounted price for each price. Since discounted is declared as let, we can access it in the block scope, which in this case the scope is the function discountPrices. Therefore, we can return it at the end of the function. 
9. The code causes an error. Since i is declared as let, we can only access it within the for-loop block. Therefore, i will not be defined when we try to output the value of it to console. 
10. Line 12 will output 3 to the console. Since we define length as const, we will have the block scope, which in this case the scope is the function discountPrices. And length is not reassgined, therefore we will not have any errors and the line will output the length of the prices list. 
11. The function will return the discounted price for each price. discounted is declared as const, which means that we cannot reassign something to the constant variable. However, it is not making the value immutabe. Therefore, we can still update the list, and the function will return the updated discounted price list. 


## Data Types:
12. 
    1.  student.name
    2.  student['Grad year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]

## Basic Operators & Type Conversion 
13. 
    1.  32, since integers map to their exact string representation
    2.  1, since integers map to their exact string representation
    3.  3, since null maps to 0 
    4.  3null, str concatnation and whitespaces from both sides are ignored
    5.  4, since true maps to 1
    6.  0, since null and false map to 0
    7.  3undefined, whitespaces from both sides are ignored
    8.  NaN, since undefined maps to NaN 
14. 
    1.  true, string '2' becomes a number 2
    2.  false, longer string is greater
    3.  true, string '2' becomes a number 2
    4.  false, === checks the equality without type conversion
    5.  false, true maps to 1 and 1!=2
    6.  true, boolean(2) evaluates to true and true is the same type as true

## Functions
17. It will return [2,4,6]. When we call modifyArray, we iterate through the entire list. For each element, we pass the element to doSomething, and it will return 2*element. Then, this new element is pushed into the new arary.

## setInterval(), setTimeout(), clearTimeout()
19. It will output 1 4 3 2 

