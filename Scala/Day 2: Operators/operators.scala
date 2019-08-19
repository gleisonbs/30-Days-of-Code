import scala.io.StdIn

object Solution {
    def solve(meal_cost: Double, tip_percent: Int, tax_percent: Int): Double = {
        return meal_cost + 
               meal_cost * (tip_percent.toDouble/100) + 
               meal_cost * (tax_percent.toDouble/100)
    }

    def main(args: Array[String]) = {
        val meal_cost = StdIn.readDouble
        val tip_percent = StdIn.readInt
        val tax_percent = StdIn.readInt

        val total_cost = solve(meal_cost, tip_percent, tax_percent)

        println(total_cost.round)
    }
}
