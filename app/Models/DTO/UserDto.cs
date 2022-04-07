public class UserDto
{
    public int Id { get; set; }
    public string Mail { get; set; }
    public string Name { get; set; }

    public string Surname { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }

    public UserDto(){}
    public UserDto(User user){
        this.Id = user.Id;
        this.Mail = user.Mail;
        this.Name = user.Name;
        this.Surname = user.Surname;
        this.Address = user.Address;
        this.City = user.City;
        this.Country = user.Country;
    }
}
