import scala.io.StdIn

object Solution {
    def main(args: Array[String]) = {
        val n = StdIn.readInt
        printMultiplesOf(n)
    }

    def printMultiplesOf(n: Int) = {
        for (i <- 1 to 10)
            println(s"${n} x ${i} = ${i*n}")
    }
}