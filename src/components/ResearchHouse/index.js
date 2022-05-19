import { Formik, Form, Field } from "formik"
import "./style.scss"

const ResearchHouse = () => { 

  const date = new Date()

  return (
    <Formik initialValues={{ search: "", dateCheckIn: "", dateCheckOut: "" }}>
      <Form id="research">
        <h2>Buscar ofertas em hotéis, casas e muito mais</h2>
        <div>
          <i style={{ color: "var(--second--color" }} className="fas fa-map-marker-alt"></i>
          <Field type="text" list="states" name="search" id="search" placeholder="Onde vamos?" />
          <datalist id="states">
            <option value="Salvador" />
            <option value="Fortaleza" />
            <option value="Porto Alegre" />
            <option value="São Paulo" />
          </datalist>

          <div id="dates">
            <Field type="date" name="dateCheckIn" min={`${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`} max={`${date.getFullYear() + 10}-0${date.getMonth() + 1}-${date.getDate()}`} id="dateCheckIn" placeholder=" Check in: " />

            <Field type="date" name="dateCheckOut" min={`${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`} max={`${date.getFullYear() + 10}-0${date.getMonth() + 1}-${date.getDate()}`} id="dateCheckOut" placeholder=" Check out: " />
          </div>
          <button type="submit">Pesquisar</button>
        </div>
      </Form>
    </Formik>
  )
}

export default ResearchHouse