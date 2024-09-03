/**
 * This file contains the data used in the HeatmapChart stories.
 * Colors are generated using the following tool:
 * https://observablehq.com/@d3/color-schemes
 *
 * YlOrRd Color Scheme
 */
export const HEATMAP_COLORS = [
  "#ffffcc",
  "#fffecb",
  "#fffec9",
  "#fffdc8",
  "#fffdc6",
  "#fffcc5",
  "#fffcc4",
  "#fffbc2",
  "#fffac1",
  "#fffac0",
  "#fff9be",
  "#fff9bd",
  "#fff8bb",
  "#fff8ba",
  "#fff7b9",
  "#fff6b7",
  "#fff6b6",
  "#fff5b5",
  "#fff5b3",
  "#fff4b2",
  "#fff4b0",
  "#fff3af",
  "#fff2ae",
  "#fff2ac",
  "#fff1ab",
  "#fff1aa",
  "#fff0a8",
  "#fff0a7",
  "#ffefa6",
  "#ffeea4",
  "#ffeea3",
  "#ffeda2",
  "#ffeda0",
  "#ffec9f",
  "#ffeb9d",
  "#ffeb9c",
  "#ffea9b",
  "#ffea99",
  "#ffe998",
  "#ffe897",
  "#ffe895",
  "#ffe794",
  "#ffe693",
  "#ffe691",
  "#ffe590",
  "#ffe48f",
  "#ffe48d",
  "#ffe38c",
  "#fee28b",
  "#fee289",
  "#fee188",
  "#fee087",
  "#fee085",
  "#fedf84",
  "#fede83",
  "#fedd82",
  "#fedc80",
  "#fedc7f",
  "#fedb7e",
  "#feda7c",
  "#fed97b",
  "#fed87a",
  "#fed778",
  "#fed777",
  "#fed676",
  "#fed574",
  "#fed473",
  "#fed372",
  "#fed270",
  "#fed16f",
  "#fed06e",
  "#fecf6c",
  "#fece6b",
  "#fecd6a",
  "#fecb69",
  "#feca67",
  "#fec966",
  "#fec865",
  "#fec764",
  "#fec662",
  "#fec561",
  "#fec460",
  "#fec25f",
  "#fec15e",
  "#fec05c",
  "#febf5b",
  "#febe5a",
  "#febd59",
  "#febb58",
  "#feba57",
  "#feb956",
  "#feb855",
  "#feb754",
  "#feb553",
  "#feb452",
  "#feb351",
  "#feb250",
  "#feb14f",
  "#feb04e",
  "#feae4d",
  "#fead4d",
  "#feac4c",
  "#feab4b",
  "#feaa4a",
  "#fea84a",
  "#fea749",
  "#fea648",
  "#fea547",
  "#fea347",
  "#fea246",
  "#fea145",
  "#fda045",
  "#fd9e44",
  "#fd9d44",
  "#fd9c43",
  "#fd9b42",
  "#fd9942",
  "#fd9841",
  "#fd9741",
  "#fd9540",
  "#fd9440",
  "#fd923f",
  "#fd913f",
  "#fd8f3e",
  "#fd8e3e",
  "#fd8d3d",
  "#fd8b3c",
  "#fd893c",
  "#fd883b",
  "#fd863b",
  "#fd853a",
  "#fd833a",
  "#fd8139",
  "#fd8039",
  "#fd7e38",
  "#fd7c38",
  "#fd7b37",
  "#fd7937",
  "#fd7736",
  "#fc7535",
  "#fc7335",
  "#fc7234",
  "#fc7034",
  "#fc6e33",
  "#fc6c33",
  "#fc6a32",
  "#fc6832",
  "#fb6731",
  "#fb6531",
  "#fb6330",
  "#fb6130",
  "#fb5f2f",
  "#fa5d2e",
  "#fa5c2e",
  "#fa5a2d",
  "#fa582d",
  "#f9562c",
  "#f9542c",
  "#f9522b",
  "#f8512b",
  "#f84f2a",
  "#f74d2a",
  "#f74b29",
  "#f64929",
  "#f64828",
  "#f54628",
  "#f54427",
  "#f44227",
  "#f44127",
  "#f33f26",
  "#f23d26",
  "#f23c25",
  "#f13a25",
  "#f03824",
  "#f03724",
  "#ef3524",
  "#ee3423",
  "#ed3223",
  "#ed3123",
  "#ec2f22",
  "#eb2e22",
  "#ea2c22",
  "#e92b22",
  "#e92921",
  "#e82821",
  "#e72621",
  "#e62521",
  "#e52420",
  "#e42220",
  "#e32120",
  "#e22020",
  "#e11f20",
  "#e01d20",
  "#df1c20",
  "#de1b20",
  "#dd1a20",
  "#dc1920",
  "#db1820",
  "#da1720",
  "#d91620",
  "#d81520",
  "#d71420",
  "#d51320",
  "#d41221",
  "#d31121",
  "#d21021",
  "#d10f21",
  "#cf0e21",
  "#ce0d21",
  "#cd0d22",
  "#cc0c22",
  "#ca0b22",
  "#c90a22",
  "#c80a22",
  "#c60923",
  "#c50823",
  "#c40823",
  "#c20723",
  "#c10723",
  "#bf0624",
  "#be0624",
  "#bc0524",
  "#bb0524",
  "#b90424",
  "#b80424",
  "#b60425",
  "#b50325",
  "#b30325",
  "#b10325",
  "#b00225",
  "#ae0225",
  "#ac0225",
  "#ab0225",
  "#a90125",
  "#a70126",
  "#a50126",
  "#a40126",
  "#a20126",
  "#a00126",
  "#9e0126",
  "#9c0026",
  "#9a0026",
  "#990026",
  "#970026",
  "#950026",
  "#930026",
  "#910026",
  "#8f0026",
  "#8d0026",
  "#8b0026",
  "#8a0026",
  "#880026",
  "#860026",
  "#840026",
  "#820026",
  "#800026",
];

export const HEATMAP_SIZE = 100;

export const HEATMAP_ITEM_SIZE = 20;

export const HEATMAP_NUMBERS = Array.from(Array(HEATMAP_SIZE).keys());

export const HEATMAP_DATA: { x: number; y: number; value: number }[] = [];

for (const x of HEATMAP_NUMBERS) {
  for (const y of HEATMAP_NUMBERS) {
    HEATMAP_DATA.push({
      value: Math.round(Math.random() * 100),
      x,
      y,
    });
  }
}

export const HEATMAP_ENCODE = { x: "x", y: "y" };

export const HEATMAP_ITEM_STYLE = {
  borderColor: "white",
  borderType: "solid",
  borderWidth: 1,
  color({ data: { value } }: { data: { value: number } }) {
    return HEATMAP_COLORS[
      Math.round((value / 100) * (HEATMAP_COLORS.length - 1))
    ];
  },
  opacity: 1,
};

export const HEATMAP_TOOLTIP_OPTIONS = [
  { show: false },
  {
    enterable: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formatter: function (param: any) {
      return param.data
        ? [
            `X-Axis: <strong>${param.data.x}</strong><br/>`,
            `Y-Axis: <strong>${param.data.y}</strong><br/><br/>`,
            `${param.marker} <strong>${param.data.value}</strong>`,
          ].join("")
        : [];
    },
    show: true,
  },
];

export const HEATMAP_AXIS_POINTER_OPTIONS = [
  {
    show: false,
    type: "none",
  },
  {
    show: true,
    triggerOn: "mousemove",
    type: "none",
  },
  {
    show: true,
    triggerOn: "click",
    type: "none",
  },
];