import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    if (mailboxes.length ===0) {
        return (
            <div>
                <h2>Mailbox List</h2>
                <p>No mailboxes found. Please add one dude!</p>
            </div>
        );
    }
    return (
        <div>
            <h2>Mailbox List</h2>
            <div className="mailbox-list">
                {mailboxes.map((mailbox) => (
                    <div key={mailbox._id} className="mail-box">
                        <Link to={`/mailboxes/${mailbox._id}`}>{mailbox._id}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default MailboxList;