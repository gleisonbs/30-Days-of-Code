import scala.io.StdIn

object Solution {
    def main(args: Array[String]): Unit = {
        val n = StdIn.readInt
        val arr = StdIn.readLine.split(" ").map(_.toInt)

        arr.reverse.map(x => print(s"${x} "))
    }
}