import { InfoOutlined } from "@mui/icons-material";
import { Args } from "@storybook/react";
import RawTooltip from "src/core/Tooltip";

export const Tooltip = (props: Args): JSX.Element => {
  const { title } = props;
  return (
    <div>
      Hover over the info icon to view the tooltip.
      <p>
        ArrowOffset changes the position of the tooltip arrow and can be any
        numeric value within [-120, 120]. Any value value over the width of the
        tooltip will remove the arrow from the tooltip.
      </p>
      <div
        style={{
          margin: "135px 300px",
        }}
      >
        <RawTooltip title={title} {...props}>
          <InfoOutlined />
        </RawTooltip>
      </div>
    </div>
  );
};
