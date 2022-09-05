import { clickPaths } from "../navigation/routePaths";
import { EditPopover } from "../shared/EditPopover";

export const ProductList = () => [
  {
    Header: "Product Name",
    accessor: "productName",
    sticky: "left",
    id: 1,
    width: 300,
    Cell: (props) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {props.value}
        <EditPopover
          values={props}
          rowId={props.row.original.id}
          toShow={{ edit: true, viewDetails: true }}
          paths={{
            edit: `${clickPaths.USENAVIGATEPRODUCTMASTERFORM}`,
          }}
        />
      </div>
    ),
  },
];

export const productmasterdata = [
  {
    productName: "School ERP",
  },
  {
    productName: "EMS",
  },
  {
    productName: "Design Tool",
  },
];
