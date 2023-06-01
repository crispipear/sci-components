import { Args, Meta } from "@storybook/react";
import ListItem from "../ListItem";
import ListSubheader from "../ListSubheader";
import RawList from "./index";

const List = (props: Args): JSX.Element => {
  return (
    <div>
      <RawList
        subheader={
          <ListSubheader disableSticky>
            Font sizes and spacing for an unordered list
          </ListSubheader>
        }
        {...props}
      >
        <ListItem fontSize="l" marginBottom="s">
          fontSize=l marginBottom=s
        </ListItem>
        <ListItem fontSize="m" marginBottom="s">
          fontSize=m marginBottom=s
        </ListItem>
        <ListItem fontSize="s" marginBottom="xs">
          fontSize=s marginBottom=xs
        </ListItem>
        <ListItem fontSize="xs" marginBottom="xs">
          fontSize=xs marginBottom=xs
        </ListItem>
        <ListItem fontSize="xxs" marginBottom="xs">
          fontSize=xxs marginBottom=xs
        </ListItem>
        <ListItem fontSize="xxxs" marginBottom="xxs">
          fontSize=xxxs marginBottom=xxs
        </ListItem>
        <ListItem fontSize="m">
          <div style={{ width: "200px" }}>
            Really long list item here to make it wrap, so we can see if the
            bullet is top aligned
          </div>
        </ListItem>
      </RawList>
      <br />
      <br />
      <RawList
        ordered
        subheader={
          <ListSubheader disableSticky>
            Font sizes and spacing for a nested ordered list
          </ListSubheader>
        }
        {...props}
      >
        <ListItem ordered>
          <span>
            Nested List 1
            <RawList ordered>
              <ListItem ordered fontSize="l" marginBottom="s">
                fontSize=l marginBottom=s
              </ListItem>
              <ListItem ordered fontSize="m" marginBottom="s">
                fontSize=m marginBottom=s
              </ListItem>
              <ListItem ordered fontSize="s" marginBottom="xs">
                fontSize=s marginBottom=xs
              </ListItem>
            </RawList>
          </span>
        </ListItem>
        <ListItem ordered>
          <span>
            Nested List 2
            <RawList ordered>
              <ListItem ordered fontSize="l">
                <span>
                  Nested List 2
                  <RawList ordered>
                    <ListItem ordered fontSize="l" marginBottom="s">
                      fontSize=l marginBottom=s
                    </ListItem>
                    <ListItem ordered fontSize="m" marginBottom="s">
                      fontSize=m marginBottom=s
                    </ListItem>
                    <ListItem ordered fontSize="s" marginBottom="xs">
                      fontSize=s marginBottom=xs
                    </ListItem>
                  </RawList>
                </span>
              </ListItem>
              <ListItem ordered fontSize="m" marginBottom="s">
                fontSize=m marginBottom=s
              </ListItem>
              <ListItem ordered fontSize="s" marginBottom="xs">
                fontSize=s marginBottom=xs
              </ListItem>
            </RawList>
          </span>
        </ListItem>
        <ListItem ordered>
          <span>
            Nested List 3
            <RawList ordered>
              <ListItem ordered fontSize="l" marginBottom="s">
                fontSize=l marginBottom=s
              </ListItem>
              <ListItem ordered fontSize="m" marginBottom="s">
                fontSize=m marginBottom=s
              </ListItem>
              <ListItem ordered fontSize="s" marginBottom="xs">
                fontSize=s marginBottom=xs
              </ListItem>
            </RawList>
          </span>
        </ListItem>
      </RawList>
      <br />
      <br />
      <RawList
        ordered
        subheader={
          <ListSubheader disableSticky>This is an ordered list</ListSubheader>
        }
        {...props}
      >
        <ListItem ordered>This is an ordered list item 1.</ListItem>
        <ListItem ordered>This is an ordered list item 2.</ListItem>
        <ListItem ordered>This is an ordered list item 3.</ListItem>
        <ListItem ordered>This is an ordered list item 4.</ListItem>
        <ListItem ordered>This is an ordered list item 5.</ListItem>
        <ListItem ordered>This is an ordered list item 6.</ListItem>
        <ListItem ordered>This is an ordered list item 7.</ListItem>
        <ListItem ordered>This is an ordered list item 8.</ListItem>
        <ListItem ordered>This is an ordered list item 9.</ListItem>
        <ListItem ordered>This is an ordered list item 10.</ListItem>
        <ListItem ordered>This is an ordered list item 11.</ListItem>
      </RawList>
      <br />
      <br />
      <RawList
        ordered
        subheader={
          <ListSubheader disableSticky>This is an unordered list</ListSubheader>
        }
        {...props}
      >
        <ListItem>This is an unordered list item 1.</ListItem>
        <ListItem>This is an unordered list item 2.</ListItem>
        <ListItem>This is an unordered list item 3.</ListItem>
        <ListItem>This is an unordered list item 4.</ListItem>
        <ListItem>This is an unordered list item 5.</ListItem>
        <ListItem>This is an unordered list item 6.</ListItem>
        <ListItem>This is an unordered list item 7.</ListItem>
        <ListItem>This is an unordered list item 8.</ListItem>
        <ListItem>This is an unordered list item 9.</ListItem>
        <ListItem>This is an unordered list item 10.</ListItem>
        <ListItem>This is an unordered list item 11.</ListItem>
      </RawList>
      <RawList
        ordered
        subheader={
          <ListSubheader disableSticky>
            Font sizes and spacing for a nested ordered list
          </ListSubheader>
        }
        {...props}
      >
        <ListItem ordered>
          <span>
            Nested List 1
            <RawList ordered>
              <ListItem ordered>Nested List item</ListItem>
              <ListItem ordered>Nested List item</ListItem>
              <ListItem ordered>Nested List item</ListItem>
            </RawList>
          </span>
        </ListItem>
        <ListItem ordered>
          <span>
            Nested List 2
            <RawList ordered>
              <ListItem ordered>
                <span>
                  Nested List 2
                  <RawList ordered>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                    <ListItem ordered>Nested List item</ListItem>
                  </RawList>
                </span>
              </ListItem>
              <ListItem ordered>Nested List item</ListItem>
              <ListItem ordered>Nested List item</ListItem>
            </RawList>
          </span>
        </ListItem>
        <ListItem ordered>
          <span>
            Nested List 3
            <RawList ordered>
              <ListItem ordered>Nested List item</ListItem>
              <ListItem ordered>Nested List item</ListItem>
              <ListItem ordered>Nested List item</ListItem>
            </RawList>
          </span>
        </ListItem>
      </RawList>
    </div>
  );
};

export default {
  component: List,
  title: "List",
} as Meta;

// Default

export const Default = {};
