import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TopOrder() {
  const OrderClick = () => {
    setTimeout(() => {
      toast.success("Your order have been add to card.");
    }, 6000);
    toast.info("Please wait....");
  };
  return (
    <div
      style={{
        backgroundColor: "#DFF5FF",
        margin: "8rem 4rem 1rem",
        padding: "3rem 0",
        borderRadius: "20px",
      }}
      className="d-flex flex-column align-items-center justify-content-center gap-5 "
    >
      <p
        style={{
          fontSize: "3rem",
          color: "#6420AA",
          fontFamily: "Madimi One",
        }}
      >
        Top Order 🔥
      </p>
      <div className="d-flex gap-5">
        <Card
          style={{
            width: "18rem",
            borderRadius: "15px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://images.ctfassets.net/v601h1fyjgba/4GLzOncHIe8rq3xY099cZ/dd17ce72ebb6fb01659c763fe64953db/Iced_Latte.jpg"
          />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title
              style={{
                color: "#6420AA",
              }}
              className="fs-3"
            >
              Iced Latte
            </Card.Title>
            <Card.Text>
              An iced latte is a chilled coffee beverage that's made by mixing
              espresso with chilled milk, simple syrup, and ice cubes.
            </Card.Text>
            <Button onClick={OrderClick} variant="primary">
              Order Now
            </Button>
            <ToastContainer position="top-right" />
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            borderRadius: "15px",
          }}
        >
          <Card.Img
            style={{
              height: "220px",
            }}
            variant="top"
            src="https://s3.amazonaws.com/media.gregoryscoffee.com/uploads/food/photo/25515/marqii_food_full_1280x720.jpg"
          />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title
              style={{
                color: "#6420AA",
              }}
              className="fs-3"
            >
              Iced Americano
            </Card.Title>
            <Card.Text>
              The Americano is a tasty beverage that offers a smoother taste
              compared to espresso, which may be too strong.
            </Card.Text>
            <Button onClick={OrderClick} variant="primary">
              Order Now
            </Button>
            <ToastContainer position="top-right" />
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            borderRadius: "15px",
          }}
        >
          <Card.Img
            style={{
              height: "220px",
            }}
            variant="top"
            src="https://www.thecookierookie.com/wp-content/uploads/2021/05/iced-espresso-recipe-2.jpg"
          />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title
              style={{
                color: "#6420AA",
              }}
              className="fs-3"
            >
              Iced espresso
            </Card.Title>
            <Card.Text>
              Iced Espresso Iced espresso is espresso served over ice, often
              with milk. It's similar to iced coffee, but it uses espresso.
            </Card.Text>
            <Button onClick={OrderClick} variant="primary">
              Order Now
            </Button>
            <ToastContainer position="top-right" />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TopOrder;
