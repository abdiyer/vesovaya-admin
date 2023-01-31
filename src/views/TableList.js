import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <form>
                  <input></input> <span>Поиск</span>
                </form>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Наименование</th>
                      <th className="border-0">БИН</th>
                      <th className="border-0">Адрес</th>
                      <th className="border-0">Телефон</th>
                      <th className="border-0">Комментарий</th>
                      <th className="border-0">Дата начала.</th>
                      <th className="border-0">Дата окончания.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>
                    <tr>
                      <td>ИП Павлов А.А.</td>
                      <td>01234567891011121314 Rice</td>
                      <td>Астана, ул. Нуртаса Ондасынова, д. 14, оф. 354</td>
                      <td>+7 (911) 189-76-38</td>
                      <td>Самый лучший контрагент</td>
                      <td>15.02.2021</td>
                      <td>22.07.2024</td>
                    </tr>

                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
