import { Formik, Form, Field } from "formik"
import "./style.scss"

const ResearchHouse = () => {

  const date = new Date()

  return (
    <Formik initialValues={{search: "", dateCheckIn: "", dateCheckOut: ""}}>
      <Form id="research">
        <h2>Buscar ofertas em hotéis, casas e muito mais</h2>
        <div>
          <i style={{color: "var(--second--color"}} className="fas fa-map-marker-alt"></i>
          <Field type="text" name="search" id="search" placeholder="Onde vamos?" />
          <div id="dates">
            {/* <i style={{color: "var(--second--color"}} className="far fa-calendar"></i> */}
            <Field type="date" name="dateCheckIn" min={`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`} max={`${date.getFullYear()+10}-0${date.getMonth()+1}-${date.getDate()}`} id="dateCheckIn" placeholder=" Check in: " />

            {/* <i style={{color: "var(--second--color"}} className="far fa-calendar" ></i> */}
            <Field type="date" name="dateCheckOut" min={`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`} max={`${date.getFullYear()+10}-0${date.getMonth()+1}-${date.getDate()}`} id="dateCheckOut" placeholder=" Check out: " />
          </div>
          <button type="submit">Pesquisar</button>
        </div>
      </Form>
    </Formik>
  )
}

export default ResearchHouse