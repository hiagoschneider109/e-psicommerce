public class User
{
    public int Id { get; set; }
    public string Mail { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }

    public User(){}
    public User(UserDto userDto){
        Mail = userDto.Mail;
        Name = userDto.Name;
        Surname = userDto.Surname;
        Address = userDto.Address;
        City = userDto.City;
        Country = userDto.Country;
    }
}
