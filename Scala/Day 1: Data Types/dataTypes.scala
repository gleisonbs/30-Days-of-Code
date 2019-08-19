import scala.io.StdIn

object Solution {
    def main(args: Array[String]) = {
        val i = 4
        val d = 4.0
        val s = "HackerRank "

		// Read values of another integer, double, and string variables
        // Note use scala.io.StdIn to read from stdin
        val iInput = StdIn.readInt
        val dInput = StdIn.readDouble
        val sInput = StdIn.readLine
        
        // Print the sum of both the integer variables
        println(i + iInput)
        
        // Print the sum of both the double variables
        println(d + dInput)
        
        // Concatenate and print the string variables
        // The 's' variable above should be printed first.
        println(s + sInput)
    }
}

