import { Star } from "lucide-react";
import { ProductDetails } from "../types/product";
import { Button } from "@/components/ui/button";

const ProductReviews = ({ details }: { details: ProductDetails }) => {
  return (
    <div className="product-reviews">
      <div className="reviews">No reviews yet</div>

      <div className="review-form border border-gray-300 p-4">
        <form action="#" className="flex flex-col gap-3 justify-center">
          <p className="text-xl text-[#333]">
            Write a review for {details.name}
          </p>
          <p className="text-[#333] text-sm">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="rating flex gap-3 items-center">
            <span className="text-xl">Your rating* </span>{" "}
            <div className="rating-values flex flex-row-reverse ">
              <span>
                <Star size={20} />
              </span>
              <span>
                <Star size={20} />
              </span>
              <span>
                <Star size={20} />
              </span>
              <span>
                <Star size={20} />
              </span>
              <span>
                <Star size={20} />
              </span>
            </div>
          </div>
          <div className="review-details ">
            <div className="text-area flex flex-col gap-2">
              <label htmlFor="review-comments">Your review *</label>
              <textarea
                name="review-comments "
                className="border border-gray-300 focus:outline-0"
                id=""
              ></textarea>
            </div>
            <div className="personal-info mt-2 sm:flex gap-3">
              <div className="info-name flex flex-col flex-1 justify-center">
                <label htmlFor="info-name">Name*</label>
                <input
                  type="text"
                  name="info-name"
                  id="info-name"
                  className="border border-gray-300 focus:outline-0 p-2"
                />
              </div>
              <div className="info-email flex-1 flex flex-col justify-center">
                <label htmlFor="info-email">Email*</label>
                <input
                  type="text"
                  name="info-email"
                  id="email"
                  className="border border-gray-300 focus:outline-0 p-2"
                />
              </div>
            </div>
          </div>
          <div className="submit">
            <Button className="bg-lime-700 hover:bg-lime-900 rounded-full ">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
