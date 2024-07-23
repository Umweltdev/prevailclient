import { useMemo } from "react";
import {
  Page,
  View,
  Text,
  Font,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { fDate } from "../utils/format-time";
import logo from "./newlogo.png";

// ----------------------------------------------------------------------

Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/Roboto-Regular.ttf" },
    { src: "/fonts/Roboto-Bold.ttf" },
  ],
});

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        col4: { width: "25%" },
        col8: { width: "75%" },
        col6: { width: "50%" },
        mb4: { marginBottom: 4 },
        mb8: { marginBottom: 8 },
        mb40: { marginBottom: 40 },
        h3: { fontSize: 16, fontWeight: 700 },
        h4: { fontSize: 13, fontWeight: 700 },
        body1: { fontSize: 10 },
        body2: { fontSize: 9 },
        subtitle1: { fontSize: 10, fontWeight: 700 },
        subtitle2: { fontSize: 9, fontWeight: 700 },
        alignRight: { textAlign: "right" },
        page: {
          fontSize: 9,
          lineHeight: 1.6,
          fontFamily: "Roboto",
          backgroundColor: "#FFFFFF",
          textTransform: "capitalize",
          padding: "40px 24px 120px 24px",
        },
        footer: {
          left: 0,
          right: 0,
          bottom: 0,
          padding: 24,
          margin: "auto",
          borderTopWidth: 1,
          borderStyle: "solid",
          position: "absolute",
          borderColor: "#DFE3E8",
        },
        gridContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        },
        table: {
          display: "flex",
          width: "auto",
        },
        tableRow: {
          padding: "8px 0",
          flexDirection: "row",
          borderBottomWidth: 1,
          borderStyle: "solid",
          borderColor: "#DFE3E8",
        },
        noBorder: {
          paddingTop: 8,
          paddingBottom: 0,
          borderBottomWidth: 0,
        },
        tableCell_1: {
          width: "5%",
        },
        tableCell_2: {
          width: "50%",
          paddingRight: 16,
        },
        tableCell_3: {
          width: "15%",
        },
      }),
    []
  );

// ----------------------------------------------------------------------

export default function InvoicePDF({ invoice, currentStatus }) {
  const {
    items,
    taxes,
    dueDate,
    discount,
    shipping,
    invoiceTo,
    createDate,
    totalAmount,
    invoiceFrom,
    invoiceNumber,
    subTotal,
  } = invoice;

  const styles = useStyles();
  const tax = 15;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.gridContainer, styles.mb40]}>
          <View style={{ flexDirection: "column" }}>
            <Text> {currentStatus}</Text>
            <Text style={styles.h3}>Invoice</Text>
          </View>
          <Image source={logo} style={{ width: 68, objectFit: "cover" }} />
        </View>

        <View style={[styles.gridContainer, styles.mb40]}>
          <View style={styles.col8}>
            <Text style={[styles.subtitle2, styles.mb4]}>Invoice from</Text>
            <Text style={styles.body2}>Prevail Agency</Text>
            <Text style={styles.body2}>
              Invoice Number: {invoice?.invoiceNumber}
            </Text>
            <Text style={styles.body2}>Date Issued: {fDate(createDate)}</Text>
            <Text style={styles.body2}>Address: Meath, Ireland</Text>
            <Text style={styles.body2}>Town, City: Duleek</Text>

            <Text style={styles.body2}>
              Email Address: info@prevailagency.ie
            </Text>
            <Text style={styles.body2}>VAT Number: IE9484135G</Text>
          </View>

          <View>
            <Text style={[styles.subtitle2, styles.mb4]}>Invoice to</Text>
            <Text style={styles.body2}>{invoiceTo.name}</Text>
            <Text style={styles.body2}>{invoiceTo.fullAddress}</Text>
            <Text style={styles.body2}>{invoiceTo.town}</Text>
            {/* <Text style={styles.body2}>{invoiceTo.phoneNumber}</Text> */}
            <Text style={styles.body2}>{invoiceTo.email}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb40]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>Date create</Text>
            <Text style={styles.body2}>{fDate(createDate)}</Text>
          </View>
          <View>
            <Text style={[styles.subtitle2, styles.mb4]}>Due date</Text>
            <Text style={styles.body2}>{fDate(dueDate)}</Text>
          </View>
        </View>

        <Text style={[styles.subtitle1, styles.mb8]}>Invoice Details</Text>

        <View style={styles.table}>
          <View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell_1}>
                <Text style={styles.subtitle2}>#</Text>
              </View>

              <View style={styles.tableCell_2}>
                <Text style={styles.subtitle2}>Description</Text>
              </View>

              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>Hour(s)</Text>
              </View>

              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>price</Text>
              </View>

              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text style={styles.subtitle2}>Total</Text>
              </View>
            </View>
          </View>

          <View>
            {items.map((item, index) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={styles.tableCell_1}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={styles.tableCell_2}>
                  <Text style={styles.subtitle2}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>

                <View style={styles.tableCell_3}>
                  <Text>{item.hour}</Text>
                </View>

                <View style={styles.tableCell_3}>
                  <Text>{item.price}</Text>
                </View>

                <View style={[styles.tableCell_3, styles.alignRight]}>
                  <Text>{`€${item.price.toLocaleString()}`}</Text>
                </View>
              </View>
            ))}

            <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text>Before Tax</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text>{`€${invoice?.totalAmount.toLocaleString()}`}</Text>
              </View>
            </View>

            <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text>Tax Amount</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text>{`€${invoice?.taxes?.toLocaleString()}`}</Text>
              </View>
            </View>

            <View style={[styles.tableRow, styles.noBorder]}>
              <View style={styles.tableCell_1} />
              <View style={styles.tableCell_2} />
              <View style={styles.tableCell_3} />
              <View style={styles.tableCell_3}>
                <Text style={styles.h4}>Total</Text>
              </View>
              <View style={[styles.tableCell_3, styles.alignRight]}>
                <Text style={styles.h4}>{`€${(
                  invoice?.totalAmount + invoice?.taxes
                ).toLocaleString()}`}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.footer]} fixed>
          <View style={styles.col8}>
            <Text style={styles.subtitle2}>NOTES</Text>
            <Text>
              We appreciate your business. Should you need us to add VAT or
              extra notes let us know!
            </Text>
          </View>
          <View style={[styles.col4, styles.alignRight]}>
            <Text style={styles.subtitle2}>Have a Question?</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
