import scala.io.StdIn

object Solution {
    def isEven(n: Int): Boolean = n % 2 == 0

    def main(args: Array[String]) = {
        val n = StdIn.readInt

        if (isEven(n) && !(6 to 20 by 2 contains n))
            println("Not Weird")
        else
            println("Weird")
    }
}