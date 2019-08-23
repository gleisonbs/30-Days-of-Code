import scala.io.StdIn

object Solution {
    def main(args: Array[String]): Unit = {
        val n = StdIn.readInt

        for (i <- 1 to n) {
            val word = StdIn.readLine
            println(accumulateChars(word))
        }
    }

    def accumulateChars(s: String, evenChars: String = "", oddChars: String = "", index: Int = 0): String = {
        if (index == s.length) 
            return s"${evenChars} ${oddChars}"

        if (index % 2 == 0) 
            accumulateChars(s, evenChars + s(index), oddChars, index+1)
        else 
            accumulateChars(s, evenChars, oddChars + s(index), index+1)
    }
}