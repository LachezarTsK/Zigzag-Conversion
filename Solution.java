
public class Solution {

    public String convert(String input, int rowsInZigZag) {
        if (input.length() < rowsInZigZag || rowsInZigZag == 1) {
            return input;
        }

        StringBuilder result = new StringBuilder();
        int charsInOneZigZagIteration_FirstRowLastRowSecondRow = 2 * (rowsInZigZag - 1);
        int firstStep = charsInOneZigZagIteration_FirstRowLastRowSecondRow;
        int secondStep = 0;

        for (int row = 0; row < rowsInZigZag; ++row) {
            int index = row;

            while (index < input.length()) {
                if (firstStep != 0 && index < input.length()) {
                    result.append(input.charAt(index));
                }
                index += firstStep;
                if (secondStep != 0 && index < input.length()) {
                    result.append(input.charAt(index));
                }
                index += secondStep;
            }
            firstStep -= 2;
            secondStep += 2;
        }

        return result.toString();
    }
}
