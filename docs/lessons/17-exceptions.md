# 17 - Exception

<Teacher name="Michele"></Teacher>

## Goals
- Understand what exceptions are
- Understand why exceptions are needed
- Know how to handle exception
- Recognize most common Java exceptions

## Slides
<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vRxO7DsrKY8_sGGsck8RKYVAkjrDNUpfsddeD7f75uS0O09_uVPyXH5AZh4tLHIX7MArYp14ap9yXa0/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Exercises

### Exercise 1 - Getting to know exceptions
- In your `main` method, use a `Scanner` to get a user input, and try to convert it to Integer. What happens if you run your program and input something that's not convertible to an integer?
- In your `main` method, create a `List<String>` and print the string at position 3 in the list. What happens when you run your program?
- Try reading a file using a `FileInputStream`. Does it work? If not, why not?
  Advice: You can try reading a file from `/some/path` like this:
  ```java
  FileInputStream inputStream = new FileInputStream(new File("/some/path"));
  // do stuff with inputStream
  inputStream.close();
  ```

### Exercise 2 - Handling exceptions
- How can you check that the user has actually entered an integer? How can you use exception-catching to solve this issue?
- Can you make your `Pizza`/`Moma`/`Bank` code from last week more reliable by catching exceptions on user input?

### Exercise 3 - finally clause
- Can you close the `inputStream` from exercise 1 after using it? You can print "Closing input stream" when calling `inputStream.close()` to make sure you're actually doing it!

### Recap
Let's make a *silly calculator*. A calculator that can only do very few, very simple operations.

When the application starts, the user should be asked which operation they want to perform. The two following operations are possible:
1. Divide 3 by a number entered by the user (3/x).
2. Calculate the square root of a number provided by the user (√x)
3. Sum 5 to a number entered by the user(5+x).

After the user has chosen one of these operations, they should be asked to enter the number they want to use for their operation (x). After entering the number, the result should be shown!

- Remember: It's not possible to divide by 0, and the square root is only defined for positive numbers.
- Try to keep your code clean! Use different methods for the various operations if possible.

## Additional Resources

- [https://www.tutorialspoint.com/java/java_exceptions.htm](https://www.tutorialspoint.com/java/java_exceptions.htm)
- [https://www.baeldung.com/java-exceptions](https://www.baeldung.com/java-exceptions)
- [https://programming.guide/java/list-of-java-exceptions.html](https://programming.guide/java/list-of-java-exceptions.html)