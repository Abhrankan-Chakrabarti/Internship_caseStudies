var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract base class from the page
var Content = /** @class */ (function () {
    function Content(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    Content.prototype.publish = function () {
        this.published = true;
    };
    Content.prototype.isPublished = function () {
        return this.published;
    };
    return Content;
}());
// Assignment subclass
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment(title, author) {
        var _this = _super.call(this, title, author) || this;
        _this.dueDate = null;
        return _this;
    }
    Assignment.prototype.setDueDate = function (date, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = date;
        }
        else {
            throw new Error("Cannot set due date after publishing or if not an instructor.");
        }
    };
    Assignment.prototype.getDueDate = function () {
        return this.dueDate;
    };
    Assignment.prototype.getType = function () {
        return "Assignment";
    };
    return Assignment;
}(Content));
// Usage
var assignment = new Assignment("Case Study", "Prof. Rao");
assignment.setDueDate(new Date("2025-01-15"), true); // allowed
assignment.publish();
// assignment.setDueDate(new Date("2025-01-20"), true); // ❌ Error
console.log(assignment.getType()); // "Assignment"
