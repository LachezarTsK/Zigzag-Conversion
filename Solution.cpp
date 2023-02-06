
#include <string>
using namespace std;

class Solution {
    
public:
    string convert(const string& input, int rowsInZigZag) const {
        if (input.length() < rowsInZigZag || rowsInZigZag == 1) {
            return input;
        }

        string result;
        int charsInOneZigZagIteration_FirstRowLastRowSecondRow = 2 * (rowsInZigZag - 1);
        int firstStep = charsInOneZigZagIteration_FirstRowLastRowSecondRow;
        int secondStep = 0;

        for (size_t row = 0; row < rowsInZigZag; ++row) {
            size_t index = row;

            while (index < input.length()) {
                if (firstStep != 0 && index < input.length()) {
                    result.push_back(input[index]);
                }
                index += firstStep;
                if (secondStep != 0 && index < input.length()) {
                    result.push_back(input[index]);
                }
                index += secondStep;
            }
            firstStep -= 2;
            secondStep += 2;
        }

        return result;
    }
};
