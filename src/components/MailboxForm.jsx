import { useState } from 'react';

const MailboxForm = ({addBox}) => {
    const [boxholder, setBoxholder] = useState('');
    const [boxSize, setBoxsize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMailbox = { boxholder, boxSize};
        addBox(newMailbox);
        setBoxholder('');
        setBoxsize('');
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Box Holder:
                    <input
                      type="text"
                      value={boxholder}
                      onChange={(e) => setBoxholder(e.target.value)}
                      />
                </label>
                <label>
                    Box Size:
                    <input
                      type="text"
                      value={boxSize}
                      onChange={(e) => setBoxsize(e.target.value)}
                      />
                </label>
                <button type="submit">Create Mailbox</button>
            </form>
        );
    };


    export default MailboxForm;
