import ContactsComp from "../ContactItem/DisplayFriendList.js";


function ContactsListResult(props) {

  const changeFriend = (friend) => {

    props.changeFriend(friend);
  }




    const contactList = props.friends.map((friend, key) => {
        
        return <ContactsComp {...friend} key = {key} changeFriend = {changeFriend} />
      });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;