import { clickPaths } from "../navigation/routePaths";
import MenuPopover from "../shared/MenuPopover";

export const menuList = (inputValues,Menu) => [
  {
    Header: "Product Name",
    accessor: "productId",
    sticky: "left",
    id: 1,
    width: 300,
    Cell: (props) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {props?.value ? inputValues?.find((item) => item.id === props.value)?.name : "-" }
          <MenuPopover Menu={Menu} index={props.row.id} path={clickPaths.USENAVIGATEMENUMASTERFORM} />
        </div>
      );
    },
  },
  {
    Header: "Menu Name",
    accessor: "name",
    id: 2,
    width: 200,
  },
  {
    Header: "Menu Design Type",
    accessor: "displayType",
    id: 3,
    width: 200,
  },
  {
    Header: "Order No",
    accessor: "orderNo",
    id: 4,
    width: 200,
  },
  {
    Header: "Sub Menus",
    accessor: "subMenus",
    id: 5,
    width: 200,
    Cell: (props) => {
      return props.value ? JSON.parse(props?.value)?.toString() : "-"
    },
  },
];
