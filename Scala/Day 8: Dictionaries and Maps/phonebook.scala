import scala.collection.immutable.Map
import scala.io.StdIn

object Solution {

    def main(args: Array[String]): Unit = {
        val n = StdIn.readInt
        val phoneBook = makePhoneBook(Map[String, String](), n)
        
        var name = StdIn.readLine
        while (name != null) {
            println(searchPhoneBook(phoneBook, name))
            name = StdIn.readLine
        }
    }

    def searchPhoneBook(phoneBook: Map[String, String], name: String): String = {
            val entry = phoneBook.getOrElse(name, "Not found")
            if (entry != "Not found")
                s"${name}=${entry}"
            else
                s"${entry}"
    }

    def makePhoneBook(phoneBook: Map[String, String], totalEntries: Int): Map[String, String] = {
        if (phoneBook.size < totalEntries) {
            val Array(name, phone) = StdIn.readLine.split(" ")
            makePhoneBook(phoneBook + (name -> phone), totalEntries)
        }
        else
            return phoneBook
    }
}
