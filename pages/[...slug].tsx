import { FC, useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { Row, Col, Empty } from "antd";
import { fetchUsers, fetchPosts, fetchComments } from "@/lib/graphql/queries";
import { DataList } from "@/components/DataList";
import { Form } from "@/components/Form";

interface DetailsProps {
  listType: string;
  data: any[];
  slugWithBlank: boolean;
}
const Details: FC<DetailsProps> = ({ listType, data, slugWithBlank = false }) => {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    setSelectedItem("");
  }, [listType]);



  return (
    <div>
      <Row>
        <Col sm={{ span: 4 }} className={`border-r-2 overflow-hiddtaen ${data.length === 0 && "h-screen"}`}>
          <DataList items={data} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </Col>
        <Col sm={{ span: 20 }}>
          <div className="pl-5">
            {slugWithBlank ? (
              <div className="h-screen flex items-center justify-center">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            ) : (
              <Form selectedItem={selectedItem} selectedType={listType} />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  try {
    let res;
    let listType = "";
    if (slug) {
      if (slug.length === 2) {
        if (checkSlugTypeWithCrud(slug as any[], "users")) {
          listType = "users";
          res = await fetchUsers();
          console.log("res user", res);
        } else if (checkSlugTypeWithCrud(slug as any[], "posts")) {
          listType = "posts";
          res = await fetchPosts();
        } else if (checkSlugTypeWithCrud(slug as any[], "comments")) {
          console.log("comments blog");
          listType = "comments";
          res = await fetchComments();
          console.log("res comment", res);
        } else if (checkSlugTypeWithBlank(slug as any)) {
          return {
            props: {
              listType: "",
              data: [],
              slugWithBlank: true,
            },
          };
        } else {
          return {
            redirect: {
              permanent: false,
              destination: "/",
            },
          };
        }
      }
    }
    return {
      props: {
        listType: listType,
        data: res[listType],
      },
    };
  } catch (err) {
    return {
      props: {
        listType: "",
        data: [],
        error: "Something went wrong",
      },
    };
  }
};

const checkSlugTypeWithCrud = (slug: any[], listType: string) => {
  if (slug[0].toLowerCase() === listType && slug[1].toLowerCase() === "crud") {
    return true;
  } else {
    return false;
  }
};

const checkSlugTypeWithBlank = (slug: any[]) => {
  if (["users", "posts", "comments"].includes(slug[0].toLowerCase()) && slug[1].toLowerCase() === "blank") {
    return true;
  } else {
    return false;
  }
};
