import { useState } from 'react'

function InputExample() {
    const [form, setForm] = useState({ name: '', surname: '' })

    // const onChangeName = (event) => setName(event.target.value)
    // const onChangeSurname = (event) => setSurname(event.target.value)
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };
    return (
        <div>
            Please enter a name
            <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
            <hr />

            Please enter a surname
            <br />
            <input surname="surname" value={form.surname} onChange={onChangeInput} />

            {form.name} {form.surname}
        </div>
    )
}

export default InputExample
