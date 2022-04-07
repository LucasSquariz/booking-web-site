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
          <Field type="text" list="states" name="search" id="search" placeholder="Onde vamos?" />
          <datalist id="states">
            <option value="Acre" />
            <option value="Alagoas" />
            <option value="Amapá" />
            <option value="Amazonas" />
            <option value="Bahia" />
            <option value="Ceará" />
            <option value="Distrito Federal" />
            <option value="Espiríto Santo" />
            <option value="Goiás" />
            <option value="Maranhão" />
            <option value="Mato Grosso" />
            <option value="Mato Grosso do Sul" />
            <option value="Minas Gerais" />
            <option value="Pará" />
            <option value="Paraíba" />
            <option value="Paraná" />
            <option value="Pernambuco" />
            <option value="Piauí" />
            <option value="Rio de Janeiro" />
            <option value="Rio Grande do Norte" />
            <option value="Rio Grande do Sul" />
            <option value="Rondônia" />
            <option value="Roraima" />
            <option value="Santa Catarina" />
            <option value="São Paulo" />
            <option value="Sergipe" />
            <option value="Tocantins" />
          </datalist>

          <div id="dates">
            <Field type="date" name="dateCheckIn" min={`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`} max={`${date.getFullYear()+10}-0${date.getMonth()+1}-${date.getDate()}`} id="dateCheckIn" placeholder=" Check in: " />

            <Field type="date" name="dateCheckOut" min={`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`} max={`${date.getFullYear()+10}-0${date.getMonth()+1}-${date.getDate()}`} id="dateCheckOut" placeholder=" Check out: " />
          </div>
          <button type="submit">Pesquisar</button>
        </div>
      </Form>
    </Formik>
  )
}

export default ResearchHouse