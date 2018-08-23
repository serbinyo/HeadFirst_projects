public class CreatureTestDrive
{
    public static void main(String[] args) 
    {
        C c = new C();
        c.setAge(3);
        c.setWeight(25);

        String sleepResult = c.sleep();

        if ( c.getAge() == 3 
            && c.getWeight() == 25
            && sleepResult.equals("Хррр ап ап храп..")) {
            System.out.println("Тест пройден");
        } else {
            System.out.println("Неудачно");
        }
    }
}

class C extends Creature
{
    public String eat ()
    {
        return "";
    }
}