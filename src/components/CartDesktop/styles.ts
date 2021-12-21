import styled from "styled-components";

interface ProductTableProps {
  show: boolean;
}

export const ProductTable = styled.table<ProductTableProps>`
  width: 100%;

  border-collapse: collapse;

  display: ${(props) => (props.show ? "table" : "none")};

  thead {
    th {
      color: var(--color-secondary);
      text-align: left;
      font-size: 1.125rem;
      font-weight: 600;
      padding: 0.75rem;
    }

    .header_center {
      text-align: center;
    }

    .header_qtd {
      display: block;
      margin-left: 20px;
    }
  }

  tbody {
    td {
      color: #fff;

      padding: 0.75rem;
      border-bottom: 1px dotted var(--color-gray-200);
    }

    .td_center {
      text-align: center;
    }
  }

  .item_image {
    width: 100px;
  }

  .item_name {
    font-size: 1.5rem;
    font-weight: 700;
    display: block;
  }

  .item_price {
    padding-top: 0.5rem;
    display: block;
    font-size: 1.125rem;
    font-weight: 500;
  }

  .item_subtotal {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .item_delete {
    background: none;
    border: 0;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
