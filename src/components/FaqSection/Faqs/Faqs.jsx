import { Accordion } from 'react-bootstrap'
import "./Faqs.css"

const Faqs = ({ data }) => {
    return (<Accordion defaultActiveKey="1">

        {data.map((data, idx) => {
            return <Accordion.Item key={idx} eventKey={data.id}
            >
                <Accordion.Header> {data.heading}</Accordion.Header>
                <Accordion.Body>
                    {data.para}
                </Accordion.Body>
            </Accordion.Item>

        })}
    </Accordion>
    )
}

export default Faqs
