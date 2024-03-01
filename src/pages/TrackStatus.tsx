import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

const Calendar = () => {
  //Modal function that shows responce of doctor

  function MyVerticallyCenteredModal(props: any) {
    const rstyle = {
      // Adding media query..
      '@media (maxWidth: 500px)': {
        background: 'red',
      },
    };

    return (
      <Modal
        className="bg-white border border-blue-600 shadow-black-100 shadow-4 w-200 h-200 mr-30 absolute top-5 left-75 z-999 rounded-xl px-10 my-10"
        style={rstyle}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: '1px solid grey' }}>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-3xl mt-5"
          >
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mt-5 text-decoration-line: underline; text-decoration-color:#fff">
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button
            onClick={props.onHide}
            className="text-white bg-blue-700 rounded px-10 py-3 my-10"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false); //for modal
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Track status" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm ">
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 mb-3 shadow-default dark:border-strokedark dark:bg-boxdark flex justify-between items-center">
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Patient name:</span> Parth Pujara
            </div>
            <div className="text-[14px]">
              1<sup>st</sup> March, 2024
            </div>
          </div>
          <div>
            {/* <div className="rounded-md border border-yellow-400 text-yellow-400 px-2 py-1 mb-3 cursor-pointer">
              Pending
            </div> */}
            <div className="rounded-md border border-green-600 text-green-600 px-2 py-1 cursor-pointer">
              Reviewed
            </div>
            <div className="rounded-md border border-green-600 text-green-600 px-2 py-1 cursor-pointer my-2">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Responce
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Calendar;
