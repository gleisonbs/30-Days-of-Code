class Person(val age: Int) {
    def amIOld: String = {
        if (0 to 12 contains age)
            "You are young"
        else if (13 to 17 contains age)
            "You are a teenager"
        else 
            "You are old"
    }

    def yearPasses = Person(age + 1)
    override def toString: String = age.toString
}

object Person {
    def apply(age: Int): Person = {
        if (age < 0) {
            println("Age is not valid, setting age to 0")
            new Person(0) 
        }
        else 
            new Person(age)
    }
}

object Solution {
    def main(args: Array[String]) = {
        val person1 = Person(-1)
        println(person1.amIOld)
        println(person1.yearPasses.yearPasses.yearPasses.amIOld)
        println

        val person2 = Person(10)
        println(person2.amIOld)
        println(person2.yearPasses.yearPasses.yearPasses.amIOld)
        println

        val person3 = Person(16)
        println(person3.amIOld)
        println(person3.yearPasses.yearPasses.yearPasses.amIOld)
        println

        val person4 = Person(18)
        println(person4.amIOld)
        println(person4.yearPasses.yearPasses.yearPasses.amIOld)
    }
}

